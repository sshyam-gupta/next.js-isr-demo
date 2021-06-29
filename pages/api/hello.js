export default (req, res) => {
  const currentDate = new Date();
  const currentOffset = currentDate.getTimezoneOffset();

  const ISTOffset = 330; // IST offset UTC +5:30

  const ISTTime = new Date(
    currentDate.getTime() + (ISTOffset + currentOffset) * 60000
  );

  const time = `${ISTTime.getHours()
    .toString()
    .padStart(2, "0")}:${ISTTime.getMinutes()
    .toString()
    .padStart(2, "0")}:${ISTTime.getSeconds().toString().padStart(2, "0")}`;

  res.status(200).json({
    time,
    name: "Shyam Gupta",
  });
};
