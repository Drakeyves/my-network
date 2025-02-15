import React, { useEffect, useState } from 'react';
import { collection, query, where, limit, getDocs } from '@firebase/firestore';
import { db } from '../../config/firebase';
import type { Course } from '../../types';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        const q = query(
          collection(db, 'courses'),
          where('featured', '==', true),
          limit(3)
        );
        
        const querySnapshot = await getDocs(q);
        const fetchedCourses = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Course));
        
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            {course.thumbnail && (
              <img 
                src={course.thumbnail}
                alt={course.title}
                className="w-24 h-24 object-cover rounded"
              />
            )}
            <div>
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {course.description}
              </p>
              <button 
                className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={() => {/* Add navigation logic */}}
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;