import Box from "./components/box/page";

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
      <div className="grid justify-stretch mx-10 grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 pt-10">
        {data.map((item) => (
          <Box id={item.boxNo} />
        ))}
      </div>
    </div>
  );
}
