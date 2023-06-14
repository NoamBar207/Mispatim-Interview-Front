export const utilService = {
  getFormatedDate,
  getFormatedDateWithTime,
  toggleModal,
  closeModal,
  openModal,
  toggleDisplayNone,
  convertSecsToMinute,
  onLoadPopUp,
};

function getFormatedDate(date) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const MM = date.toLocaleString("en-us", options);
  const createdAt = `${MM}`;
  return createdAt;
}

function toggleDisplayNone(refType) {
  refType.current.classList.toggle("hide-none");
}

function toggleModal(refType) {
  refType.current.classList.toggle("hide");
}

function closeModal(refType) {
  refType.current.classList.add("hide");
}

function openModal(refType) {
  refType.current.classList.remove("hide");
}

function onLoadPopUp(popUpRef) {
  popUpRef.current.classList.add("show");
  setTimeout(() => {
    popUpRef.current.classList.remove("show");
  }, 5000);
}

function convertSecsToMinute(value) {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
}

function getFormatedDateWithTime(date) {
  const options = { month: "short", day: "numeric" };
  const MM = date.toLocaleString("en-us", options);
  let time = date.toLocaleTimeString();
  time = time.slice(0, time.length - 3);
  const createdAt = `${MM} , ${time}`;
  return createdAt;
}
