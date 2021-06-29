// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const currentDate = new Date();
  const currentOffset = currentDate.getTimezoneOffset();

  const ISTOffset = 330; // IST offset UTC +5:30

  const ISTTime = new Date(
    currentDate.getTime() + (ISTOffset + currentOffset) * 60000
  );

  res.status(200).json({
    time: `${ISTTime.getHours()
      .toString()
      .padStart(2, "0")}:${ISTTime.getMinutes()
      .toString()
      .padStart(2, "0")}:${ISTTime.getSeconds().toString().padStart(2, "0")}`,
    name: "Shyam Gupta",
  });
};
