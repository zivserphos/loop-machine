const durationDisplay = (duration: number) => {
  const newDuration: (string | number)[] = [
    Math.floor(duration / 60),
    duration % 60,
  ];
  if (newDuration[1] < 10) {
    newDuration[1] = `0${newDuration[1].toString()}`;
  }
  if (newDuration[0] < 10) {
    newDuration[0] = `0${newDuration[0].toString()}`;
  }

  return newDuration.join(":");
};

export default durationDisplay;
