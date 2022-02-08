import './Project.scss';
import DBS1 from '../../media/images/dbs1.png';
import DBS2 from '../../media/images/dbs2.png';
import DBS3 from '../../media/images/dbs3.png';

const Project = function(){

  return(
    <div className='project'>

      <div className='project_grid'>
        <div className='project_grid_content'>
          <h1>DEADBYSTATS.EU</h1>
          <p>Fanlike project that allows players of Dead by Daylight to check & compare their stats and save they progress.</p>
        
        </div>
        <div className='project_grid_images'>
          <img src={DBS1} alt="dbs1" />
          <img src={DBS2} alt="dbs2" />
          <img src={DBS3} alt="dbs3" />
        </div>

      </div>

    </div>
  )
}

export default Project;