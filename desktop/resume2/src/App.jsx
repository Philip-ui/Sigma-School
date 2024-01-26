import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

function DisplayItem({ details }) {
  return (
    <>
      <span>
        {details}
      </span>

    </>
  );
}



function Category1({name}) {
  return (
    <p>{name}</p>    
  );
}

const AddressDetails = (
  <>
  <div className='add_details'>
    <DisplayItem details={"1111 College Street, College Park MD"}  />
    <DisplayItem details={"john.doe@gmail.com | 111-111-1111 | linkedin.com/in/john"} />
  </div>
  </>
);

const NameDetails = (
  
  <div className='container'>
    <div className='name_details'>
      <b><DisplayItem details={"EDUCATION"}  /></b>
    </div>
    <hr />
    <div className='name_details'>
      <b><DisplayItem details={"University of Maryland, College Park - Cumulative GPA: 3.66"}  /></b>
      <DisplayItem details={"College Park, MD"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><DisplayItem details={"Major: Bachelor of Science, Economics & Mathematics"}  /></span>
      <span><DisplayItem details={"Expected Graduation: May 2019"}  /></span>    
    </div>
    <div className='name_details'>
      <span><DisplayItem details={"Minor: Business Analytics"}  /></span>
    </div> 
  </div>
  
);

const ExperienceDetails = (
  
  <div className='container'>
    <div className='name_details'>
      <b><DisplayItem details={"EXPERIENCE"}  /></b>
    </div>
    <hr />
    <div className='name_details'>
      <b><DisplayItem details={"Federal Reserve Bank of New York, Research and Statistics Group"}  /></b>
      <DisplayItem details={"New York, NY"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Microeconomics Summer Analyst"}  /></i></span>
      <span><DisplayItem details={"June 2018 – Present"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Work with Equifax dataset, a time-series dataset representative of 30% of U.S. jobs, to determine its usefulness in future research projects"}  /></li>
        <li><DisplayItem details={"Used Stata to aggregate individual observations in the dataset, then compared said aggregated results to already existing macroeconomic measurements (JOLTS, BLS, and NSA data"}  /></li>
      </ul>
    </div>
    <div className='name_details'>
      <b><DisplayItem details={"Federal Reserve Board of Governors, Division of International Finance"}  /></b>
      <DisplayItem details={"Washington D.C."}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Research Intern"}  /></i></span>
      <span><DisplayItem details={"June 2017 – August 2017"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Extract flow of funds data on selected EU countries and emerging markets, reshaping the data through the use of both R and Microsoft Excel to create a dataset from which future research projects will be conducted"}  /></li>
        <li><DisplayItem details={"Assist in the creation of a syndicated loan vending market database, conjoining previously unmatched data from the Shared National Credit Program (SNC), Thomson Reuters Dealscan, and Compustat"}  /></li>
      </ul>
    </div>
    <div className='name_details'>
      <b><DisplayItem details={"University of Maryland, Department of Economics"}  /></b>
      <DisplayItem details={"College Park, MD"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Research Assistant"}  /></i></span>
      <span><DisplayItem details={"Mar 2017 – June 2017"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Gather data from National Archives in College Park on the National War Labor Board, specifically policy regarding wage stabilization during the early 1940s"}  /></li>       
      </ul>
    </div> 
    <div className='name_details'>
      <b><DisplayItem details={"United States Department of Agriculture – Agricultural Research Services"}  /></b>
      <DisplayItem details={"Beltsville, MD"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Grants & Agreements Intern"}  /></i></span>
      <span><DisplayItem details={"Jan 2017 – May 2017"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Researched current government cooperative agreements/grants between ARS, ERS, and the accompanying research institution"}  /></li>       
        <li><DisplayItem details={"Cross-referenced data nodes within ARIS/AIMS database with quarterly budget reports within Microsoft Excel spreadsheets to identify and execute un-fulfilled agreements"}  /></li>
        <li><DisplayItem details={"Maintained both the internal Axon department-based webpages and external publicly accessible website"}  /></li>
      </ul>
    </div>
    <div className='name_details'>
      <b><DisplayItem details={"University Career Center & The President’s Promise"}  /></b>
      <DisplayItem details={"College Park, MD"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Peer Career Educator"}  /></i></span>
      <span><DisplayItem details={"Aug 2016 - Present"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Advise and meet with students to provide career development assistance, including resume and cover letter reviews, in addition to hosting a minimum of 2 workshops per semester"}  /></li>       
        <li><DisplayItem details={"During the 2017-18 academic year, completed the highest number of assistance appointments (163), with 96% of said students being fulfilled from their experience "}  /></li>        
      </ul>
    </div>
    <div className='name_details'>
      <b><DisplayItem details={"University of Maryland – Department of Resident Life"}  /></b>
      <DisplayItem details={"College Park, MD"}  />    
    </div>
    <div className='name_details'>
      <span className='priority'><i><DisplayItem details={"Resident Assistant"}  /></i></span>
      <span><DisplayItem details={"May 2017 – Present"}  /></span>    
    </div>
    <div className='name_details'>
      <ul>
        <li><DisplayItem details={"Facilitate the development of a community for 50+ residents through the coordination and planning of events, development of passive programming, and creation of active programs"}  /></li>       
        <li><DisplayItem details={"Ensure Office of Rights and Responsibilities rules are being followed by residents through weekly duty rounds"}  /></li>
        <li><DisplayItem details={"Serve as a resource to students, linking them to resources around campus that are capable of helping them solve potential issues"}  /></li>
      </ul>
    </div>  
  </div>
  
);

const OtherSkills = (
  
  <div className='container'>
    <div className='name_details'>
      <b><DisplayItem details={"OTHER SKILLS"}  /></b>
    </div>
    <hr />
    <div>
      <b><DisplayItem details={"Computer: "}  /></b>
      <DisplayItem details={"Microsoft Applications (Excel, Word, PowerPoint, Outlook, & Access), SAS, Matlab, and R"}  />    
    </div>    
  </div>
  
);

function App() {
  return(
    <>
    <div className='header'>
      <h1>John Doe</h1>
      <Category1 name={AddressDetails}/> 
    </div> 
    <div>     
      <Category1 name={NameDetails} /> 
    </div> 
    <div>     
      <Category1 name={ExperienceDetails} /> 
    </div>
    <div>     
      <Category1 name={OtherSkills} /> 
    </div>          
    </>
  );
}

export default App
