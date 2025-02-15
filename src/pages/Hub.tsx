import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedCourses from '../components/hub/FeaturedCourses';
import UpcomingEvents from '../components/hub/UpcomingEvents';
import Tools from '../components/hub/Tools';
import { RootState } from '../store';

const Hub = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.displayName || 'User'}
        </h1>
        <p className="text-gray-600 mt-2">
          Access your learning resources, tools, and community updates all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Courses */}
        <div className="lg:col-span-2">
          <FeaturedCourses />
        </div>

        {/* Upcoming Events */}
        <div>
          <UpcomingEvents />
        </div>

        {/* Quick Access Tools */}
        <div className="lg:col-span-3">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default Hub;