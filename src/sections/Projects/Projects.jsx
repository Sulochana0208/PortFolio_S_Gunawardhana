import styles from './ProjectsStyles.module.css';
import expense from '../../assets/Expense.png';
import TP from '../../assets/TPlanner.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={expense}
          link="https://github.com/Sulochana0208/Expense_Tracking_App"
          h3="ExpenseTracker"
          p="Expenses Tracking App"
        />
        <ProjectCard
          src={TP}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TravelPlaner"
          p="Trip planning App"
        />
      </div>
    </section>
  );
}

export default Projects;
