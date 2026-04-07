import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProfileSettings({ role }: { role: string }) {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    institution: "",
    batchYear: "",
    companyName: ""
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);
      setPreview(URL.createObjectURL(file)); // live preview
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      await axios.put(
        "http://127.0.0.1:5000/api/user/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      toast.success("Profile updated successfully");

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.error || "Update failed");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Profile Settings</h2>
        <p className="text-gray-400 text-sm">
          Manage your personal information and account details
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-[#18181B] p-6 rounded-2xl border border-gray-800 flex items-center gap-6">

        <div className="relative">
          <img
            src={preview || "https://via.placeholder.com/100"}
            className="w-24 h-24 rounded-full object-cover border border-gray-700"
          />
        </div>

        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-300"
          />
          <p className="text-xs text-gray-500 mt-1">
            JPG, PNG. Max size 2MB
          </p>
        </div>

      </div>

      {/* BASIC INFO */}
      <div className="bg-[#18181B] p-6 rounded-2xl border border-gray-800 space-y-4">

        <h3 className="text-lg font-semibold">Basic Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="input-dark"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            className="input-dark"
          />
        </div>

      </div>

      {/* ROLE BASED */}
      <div className="bg-[#18181B] p-6 rounded-2xl border border-gray-800 space-y-4">

        <h3 className="text-lg font-semibold">
          {role === "student" ? "Academic Details" : "Professional Details"}
        </h3>

        {role === "student" && (
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="institution"
              placeholder="Institution Name"
              onChange={handleChange}
              className="input-dark"
            />
            <input
              name="batchYear"
              placeholder="Batch Year"
              onChange={handleChange}
              className="input-dark"
            />
          </div>
        )}

        {role === "professional" && (
          <input
            name="companyName"
            placeholder="Company / Organization"
            onChange={handleChange}
            className="input-dark"
          />
        )}

      </div>

      {/* ACTION */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#3B82F6] px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

    </div>
  );
}