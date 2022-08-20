import React from 'react';
import PropTypes from 'prop-types';
import './TaskOrganizer.css';

import {
  FaPlus
} from 'react-icons/fa';

import NoTask from '../../images/no_tasks.png';

const TaskOrganizer = () => (
  <div className="TaskOrganizer container" data-testid="TaskOrganizer">
    <div className='AppTitle'>
      <h1 className='text-white fw-bold'>Task <span className='text-info'>Organizer</span></h1>
    </div>
    <div className='TaskOrganizer-container'>
      <div className="TaskOrganizer-form d-flex align-items-center gap-2">
        <input type="text" className='TaskOrganizer-input form-control bg-dark' placeholder='Add a task' />
        <button className='TaskOrganizer-button btn btn-info d-flex align-items-center gap-1'>
          <FaPlus size={12} />
          <p className='m-0 fw-bold fs-6'>New</p>
        </button>
      </div>
      <hr></hr>
      <div className="TaskOrganizer-list">
        <div className="TaskNotFound text-center">
          <img src={NoTask} width="350px"/>
          <p className='text-info fw-bold fs-6'>No tasks found</p>
        </div>
        {/* <div className="TaskOrganizer-list-item d-flex align-items-center gap-2">
          <div className="TaskOrganizer-list-item-checkbox d-flex align-items-center">
            <input type="checkbox" className='TaskOrganizer-list-item-checkbox-input' />
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

TaskOrganizer.propTypes = {};

TaskOrganizer.defaultProps = {};

export default TaskOrganizer;
