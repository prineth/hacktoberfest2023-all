import Box from "./components/box/page";

export default function Grid() {
  // 100 boxes
  const data = [
    { 
        id: 1, 
        boxNo: 1, 
        username: "foo", 
        githubLink: "https://github.com/prineth", 
        githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4" 
    },
    {
        id: 2, 
        boxNo: 2, 
        username: "bar", 
        githubLink: "https://github.com/prineth", 
        githubProfilePic: "https://avatars.githubusercontent.com/u/70090385?v=4"
    },
  ];

  return (
    <div>
      <div className="grid mx-10 my-5 grid-cols-10 gap-0.5">
        {Array.from({ length: 100 }, (_, i) => (
          <Box id={i} />
        ))}
      </div>
    </div>
  );
}
