import Link from "next/link";

interface RoleSelectionProps {
  role: string | null; // Allow null for cases where the role is not set.
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ role }) => {
  if (role === "teacher") {
    return (
      <div className="flex flex-col items-center">
        <Link
          href="/teacherPage"
          className="bg-blue-600 text-white p-4 rounded text-lg font-serif transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-700"
        >
          Go to Teacher Page
        </Link>
      </div>
    );
  } else if (role === "student") {
    return (
      <div className="flex flex-col items-center">
        <Link
          href="/studentPage"
          className="bg-blue-600 text-white p-4 rounded text-lg font-serif transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-700"
        >
          Go to Student Page
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-gray-600 text-center">
        <p>Please select a role to continue.</p>
      </div>
    );
  }
};

export default RoleSelection;
