// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    time: `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`,
    name: "Shyam Gupta",
  });
};
