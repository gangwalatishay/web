const courses = require('../data/courses');

function getAllCourses(req, res) {
    try {
        res.json(courses);
    } catch (error) {
        console.error('Get all courses error:', error);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
}

function getCourseById(req, res) {
    try {
        const { courseId } = req.params;
        console.log('Fetching course with ID:', courseId);
        // Using loose equality or converting to string to be safe
        const course = courses.find(c => String(c.courseId) === String(courseId));

        if (!course) {
            console.log('Course not found for ID:', courseId);
            return res.status(404).json({ error: `Course with ID ${courseId} not found` });
        }

        res.json(course);
    } catch (error) {
        console.error('Get course by id error:', error);
        res.status(500).json({ error: 'Failed to fetch course' });
    }
}

module.exports = { getAllCourses, getCourseById };
