import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "@/app/navbar/navbar";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, FileText, CheckCircle2, PlayCircle, BookOpen, Clock, BarChart } from "lucide-react";
import { loadRazorpayCheckout, openCheckout } from "@/lib/razorpay";

type CourseItem = {
  courseId: string;
  price: string;
  image: string;
  features: string[];
  demoVideo?: string;
  title: string;
  description: string;
};

// Validate video URL
function isValidVideoUrl(url: string): boolean {
  if (!url) return false;
  return url.includes("amazonaws.com") || url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
}

function rupeesToPaise(str: string) {
  const clean = str.replace(/[^\d]/g, "");
  const rupees = parseInt(clean, 10);
  return rupees * 100;
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<CourseItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourse() {
      if (!courseId) return;

      try {
        setLoading(true);
        // Ensure fetching from the correct backend URL
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setCourse(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to fetch course details");
        setCourse(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
    window.scrollTo(0, 0);
  }, [courseId]);

  async function handleBuy() {
    if (!course) return;
    const userId = localStorage.getItem("userId") || "guest";
    const amount = rupeesToPaise(course.price);

    const loaded = await loadRazorpayCheckout();
    if (!loaded) {
      alert("Failed to load Razorpay. Please check your internet connection.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/payment/create-order", {
        courseId: course.courseId,
        amount,
        userId,
      });

      const { orderId, key_id, currency } = res.data;
      const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

      openCheckout(
        {
          key: key_id,
          amount,
          currency,
          name: "AlgoAscend",
          description: course.title,
          order_id: orderId,
          prefill: {
            name: user.name || "",
            email: user.email || "",
            contact: user.mobile || "",
          },
        },
        async (resp) => {
          try {
            const verify = await axios.post("http://localhost:5000/api/payment/verify", {
              razorpay_order_id: resp.razorpay_order_id,
              razorpay_payment_id: resp.razorpay_payment_id,
              razorpay_signature: resp.razorpay_signature,
              courseId: course.courseId,
              userId,
            });
            if (verify.data?.success) {
              alert("Payment successful! Course has been added to your profile.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification failed. Please contact support.");
          }
        },
        () => {
          alert("Payment cancelled or failed. Please try again.");
        }
      );
    } catch (err) {
      console.error("Order creation error:", err);
      alert("Failed to initiate payment. Please try again later.");
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#0F1115]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-xl text-sky-400">Loading Course Details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-[#0F1115]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold mb-4 text-red-500">{error || "Course Not Found"}</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            We couldn't find the course you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/courses">
            <Button variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-500/10">
              ← Back to Courses
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F1115] text-white">
      <Navbar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <nav className="flex mb-6 text-sm text-gray-500 gap-2">
                <Link to="/" className="hover:text-sky-400">Home</Link>
                <span>/</span>
                <Link to="/courses" className="hover:text-sky-400">Courses</Link>
                <span>/</span>
                <span className="text-sky-400 truncate">{course.title}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-500" />
                  <span>Self-paced Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-sky-500" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-sky-500" />
                  <span>Hands-on Projects</span>
                </div>
              </div>
            </div>

            {/* VIDEO PLAYER SECTION */}
            <div className="bg-[#1A1D23] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
              {isValidVideoUrl(course.demoVideo || "") ? (
                <video 
                  src={course.demoVideo} 
                  className="w-full aspect-video object-cover" 
                  controls
                  poster={course.image}
                />
              ) : (
                <div className="w-full aspect-video bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-sky-500 to-purple-600" />
                  <PlayCircle className="w-20 h-20 text-sky-500/50 mb-4 z-10 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-500 z-10 font-medium">Demo video coming soon</p>
                </div>
              )}
            </div>

            {/* FEATURES SECTION */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-sky-500" />
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#1A1D23] p-4 rounded-xl border border-gray-800 hover:border-sky-500/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#1A1D23] rounded-2xl border border-gray-800 p-8 shadow-2xl space-y-8">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-sky-500 text-sm font-bold tracking-widest uppercase">Premium Course</span>
                <div className="text-4xl font-black text-white">{course.price}</div>
                <p className="text-gray-500 text-sm italic">Lifetime access & future updates</p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleBuy}
                  className="w-full h-14 bg-sky-600 hover:bg-sky-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Enroll Now
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-300 rounded-xl flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="h-12 border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-300 rounded-xl flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    Brochure
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800 space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Includes:</p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center gap-3 italic">✓ Access on mobile and TV</li>
                  <li className="flex items-center gap-3 italic">✓ Certificate of completion</li>
                  <li className="flex items-center gap-3 italic">✓ Q&A with instructors</li>
                  <li className="flex items-center gap-3 italic">✓ Downloadable resources</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
