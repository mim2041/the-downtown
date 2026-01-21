import followUs from "@/src/data/FollowUsData";
import { SiBehance, SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  pinterest: <SiPinterest className="w-5 h-5" />,
  behance: <SiBehance className="w-5 h-5" />,
  instagram: <SiInstagram className="w-5 h-5" />,
};

export default function FollowUs() {
  return (
    <div className="w-full bg-white p-5 border border-gray-50">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        Follow Us
      </h3>

      {/* Divider */}
      <div className="relative mt-2 mb-6 h-px bg-gray-200">
        <span className="absolute left-0 top-0 h-px w-10 bg-black"></span>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {followUs.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 border border-gray-300 p-4"
          >
            <div className={`${item.color}`}>
              {iconMap[item.icon]}
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">
                {item.followers}
              </span>{" "}
              Followers
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
