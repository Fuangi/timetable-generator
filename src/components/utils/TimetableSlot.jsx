function TimetableSlot(course) {
  return (
    <div className="timetable-slot">
      <h3>{course?.course?.title}</h3>
      <p>{course?.course?.event?.data?.type}</p>
      {/* The above is for the teacher name */}
    </div>
  );
}

export default TimetableSlot;
