import followUs from "@/src/data/FollowUsData";
import { SiBehance, SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import LeftSection from "@/src/components/Reusable/LeftSections";

const iconMap: Record<string, React.ReactNode> = {
  pinterest: <SiPinterest className="w-5 h-5" />,
  behance: <SiBehance className="w-5 h-5" />,
  instagram: <SiInstagram className="w-5 h-5" />,
};

export default function FollowUs() {
  return (
    <div className='my-6 lg:my-10'>
      <LeftSection title="Follow Us" data={followUs} children={(item) => (
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
      )} />
    </div>
  );
}
