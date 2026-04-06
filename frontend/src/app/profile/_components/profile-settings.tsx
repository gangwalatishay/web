import { useState } from "react";

export default function ProfileSettings({ role }: { role: string }) {

  const [form, setForm] = useState({
    institution: "",
    batchYear: "",
    companyName: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#18181B] p-6 rounded-3xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {role === "student" && (
          <>
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
          </>
        )}

        {role === "professor" && (
          <input
            name="companyName"
            placeholder="Organization / Company"
            onChange={handleChange}
            className="input-dark"
          />
        )}

      </div>

      <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
        Save Changes
      </button>

    </div>
  );
}