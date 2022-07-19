import React, { useState } from 'react';
import { ScheduleWrapper } from './CustomStyled';
import {
  ScheduleComponent,
  Inject,
  Agenda,
  Day,
  Month,
  Week,
  WorkWeek,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const Schedule: React.FC = () => {
  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  return (
    <ScheduleWrapper>
      <div className="schedule-content">
        <ScheduleComponent
          currentView="Month"
          eventSettings={{ dataSource: remoteData }}
          selectedDate={new Date(2017, 5, 5)}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </ScheduleWrapper>
  );
};

export default Schedule;
