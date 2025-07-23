import { useEffect, useState } from "react";
import axios from "axios";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/announcements")
      .then(res => setAnnouncements(res.data))
      .catch(err => console.error("Error fetching announcements:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      {announcements.length === 0 && <p>No announcements found.</p>}
      <ul className="space-y-4">
        {announcements.map((ann) => (
          <li key={ann._id} className="border p-4 rounded shadow-sm">
            <p>{ann.message || ann.title || "No content"}</p>
            <small className="text-gray-500">
              {new Date(ann.createdAt).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
