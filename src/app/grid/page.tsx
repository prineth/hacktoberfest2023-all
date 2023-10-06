import Box from "./components/box/page";
import Logo from "../../../public/logo-hacktoberfest.svg";
import Image from "next/image";
import Link from "next/link";

export default function Grid() {
  // 100 boxes
  const data = [
    {
      id: 1,
      boxNo: 1,
      username: "foo",
      githubLink: "https://github.com/prineth",
      githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4",
    },
    {
      id: 2,
      boxNo: 2,
      username: "bar",
      githubLink: "https://github.com/prineth",
      githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4",
    },
    {
      id: 3,
      boxNo: 3,
      username: "bar",
      githubLink: "https://github.com/prineth",
      githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4",
    },
    {
      id: 4,
      boxNo: 4,
      username: "bar",
      githubLink: "https://github.com/prineth",
      githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4",
    },
    {
      id: 5,
      boxNo: 5,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 6,
      boxNo: 6,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 7,
      boxNo: 7,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 8,
      boxNo: 8,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 9,
      boxNo: 9,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 10,
      boxNo: 10,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 11,
      boxNo: 11,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 12,
      boxNo: 12,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 13,
      boxNo: 13,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 14,
      boxNo: 14,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 15,
      boxNo: 15,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
    {
      id: 16,
      boxNo: 16,
      username: "bar",
      githubLink: "",
      githubProfilePic: "",
    },
  ];

  return (
    <div>
      {/* svg */}
      <div className="pl-20 pt-10 grid grid-cols-2">
        <Image priority src={Logo} alt="logo" />
        <div className="mr-20">
          <div className="flex justify-end">
            <div
              className="border-2 border-[#93848d] hover:border-[#fff9ae] hover:bg-[#74677d2e] w-34 rounded-3xl"
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 163, 0.4)",
                backgroundImage: "url('http://localhost:3000/bg-header-img.png')",
                backgroundSize: "cover", // Adjust the values as needed
              }}
            >
              <Link
                className="text-[#93848d] hover:text-white px-5 py-5 flex items-center justify-center"
                href={"https://github.com/prineth/hacktoberfest2023-all"}
              >
                START HACKING
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid justify-stretch mx-5 sm:mx-16 grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-4 pt-10">
        {data.map((item) => (
          <Box id={item.boxNo} />
        ))}
      </div>
    </div>
  );
}
