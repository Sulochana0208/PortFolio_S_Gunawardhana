import styles from './ProjectsStyles.module.css';
import expense from '../../assets/Expense.png';
import TP from '../../assets/TPlanner.webp';
import ProjectCard from '../../common/ProjectCard';
import quiz from '../../assets/quiz.jpg';
import EzBuy from '../../assets/EzBuy.jpg';
 
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
          src={EzBuy}
          link="https://github.com/Sulochana0208/EzBuy-ECommerce_Web_App"
          h3="EzBuy"
          p="Online Shopping App" 
        />

        <ProjectCard
          src={TP}
          link="https://github.com/Sulochana0208/Travel-planner"
          h3="TravelPlaner"
          p="Trip planning App"
        />

        <ProjectCard
          src={quiz}
          link="https://github.com/Sulochana0208/Quiz_App"
          h3="QuizApp"
          p="Quiz Application"
        />
      </div>
    </section>
  );
}

export default Projects;
