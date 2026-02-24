import "../Styles/TimelineSection.css";
// import '../Styles/WinterHolidays.css'

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="timeline-line"></div>

      {/* ITEM 1 */}
      <div className="timeline-item">
        <div className="timeline-content text">
          <span className="subtitle">Condimentum fames egestas ad potenti</span>
          <h2>Lementum musat dignissim<br />Mi vestibulum iaculis consectetur</h2>
          <p>
            Scelerisque ullamcorper facilisis nisl a suspendisse elementum musat
            rasd dignissim at condimentum artas quam ut in.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>

        <div className="timeline-image">
          <img
            src=""
            alt="Santa illustration"
          />
        </div>

        <span className="timeline-number">1</span>
      </div>

      {/* ITEM 2 */}
      <div className="timeline-item reverse">
        <div className="timeline-image">
          <img
            src="s"
            alt="Santa on roof"
          />
        </div>

        <div className="timeline-content text">
          <span className="subtitle">Condimentum fames egestas ad potenti</span>
          <h2>Sed mollis lectus condiment<br />Facilisis dictumst laoreet</h2>
          <p>
            Scelerisque ullamcorper facilisis nisl a suspendisse elementum musat
            rasd dignissim at condimentum.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>

        <span className="timeline-number">2</span>
      </div>
    </section>
  );
}

export default TimelineSection;
