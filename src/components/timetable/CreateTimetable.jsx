function CreateTimetable() {
  return (
    <div className="create-timetable">
      <h2>Create a timetable</h2>
      <form>
        <div className="input">
          <label htmlFor="name">Timetable Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="input">
          <label htmlFor="break">Timetable Breaktime</label>
          <input type="time" name="break" id="break" />
        </div>
        <div className="input">
          <label htmlFor="level">Choose Level</label>
          <select name="level" id="level">
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="course">Choose Courses</label>
          <select name="course" id="course">
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>

        <button>Generate Timetable</button>
      </form>
    </div>
  );
}

export default CreateTimetable;
