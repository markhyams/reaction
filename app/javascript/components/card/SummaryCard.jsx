import React from 'react';
import moment from 'moment';
import * as utilities from '../../lib/Utilities';

import { Link } from 'react-router-dom';

function SummaryCard(props) {
  return (
    <Link to={`/cards/${props.id}`}>
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            <div className="card-label green colorblindable"></div>
            <div className="card-label yellow colorblindable"></div>
            <div className="card-label red colorblindable"></div>
            <div className="card-label orange colorblindable"></div>
            <div className="card-label blue colorblindable"></div>
            <div className="card-label purple colorblindable"></div>
            <p>{props.title}</p>
          </div>
          <div className="card-icons">
            {props.due_date && (
              <i
                className={`clock-icon sm-icon ${utilities.dueClass(
                  props,
                )}`} // TODO
              >
                {moment(props.due_date).format('MMM D')}
              </i>
            )}

            {props.description && (
              <i className="description-icon sm-icon"></i>
            )}
            {props.comments_count > 0 && (
              <i className="comment-icon sm-icon"></i>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SummaryCard;
