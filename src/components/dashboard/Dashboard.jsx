import { pictures } from "../../assets";
import TimetableCard from "../timetable/TimetableCard";
import TimetableSlot from "../timetable/TimetableSlot";
import DashLayout from "./DashLayout";
import MyCalendar from "./MyCalendar";

function Dashboard() {
  return (
    <DashLayout>
      <div className="dashboard">
        <div className="dashboard-body">
          <div className="left-side">
            <div className="top-content">
              <h2>Our wonderful timetable generator...</h2>
              <p>Start creating now!</p>
              <button>Support...</button>
            </div>
            <div className="stats-freq">
              <h3>Your Timetable statistics</h3>
              <p>
                <span>Hours</span>
                <span>Number</span>
              </p>
              <img src={pictures.graph} alt="Graph" style={{ height: "85%" }} />
            </div>
            <div className="recents">
              <h2>Your Recent Timetables</h2>
              {/* <div className="recent-timetables">
                <TimetableCard />
                <TimetableCard />
              </div> */}
            </div>
          </div>
          <div className="right-side">
            <div className="calendar">
              <MyCalendar />
            </div>
            <div className="upcoming">
              <h2>Upcoming Timetable Slots</h2>

              <div className="upcoming-slots">
                <TimetableSlot />
                <TimetableSlot />
                <TimetableSlot />
                <TimetableSlot />
                <button>Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
}

export default Dashboard;
