import React, { useEffect, useState } from 'react'

const Jobhistory = () => {
    const [jobposthistory, setjobposthostory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchJobs()
    }, [])

    const fetchJobs = () => {
        fetch("/api/interviewer/fetchjobs")
            .then((res) => res.json())
            .then((data) => {
                if(data.success){
                    setjobposthostory(data.data)
                } else {
                    console.log(`Failed to fetch data: ${data.message}`)
                    setError(data.message)
                }
            })
            .catch((err) => {
                console.error("Error:", err)
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleDelete = async (jobId) => {
        if (!window.confirm('Are you sure you want to delete this job posting?')) {
            return;
        }

        try {
            const res = await fetch(`/api/interviewer/deletejob/${jobId}`, {
                method: 'DELETE',
            });
            const data = await res.json();

            if (data.success) {
                alert('Job deleted successfully');
                // Remove deleted job from state
                setjobposthostory((prev) => prev.filter((job) => job._id !== jobId));
            } else {
                alert('Failed to delete: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Network error');
        }
    }

    if (loading) {
        return <div className='text-center p-8'>Loading job history...</div>
    }

    if (error) {
        return <div className='text-center p-8 text-red-500'>Error: {error}</div>
    }

    return (
        <div className='p-6'>
            <h2 className='text-3xl font-bold mb-6'>Job Posting History</h2>
            {jobposthistory.length === 0 ? (
                <p className='text-gray-400'>No job postings found.</p>
            ) : (
                <div className='grid gap-4'>
                    {jobposthistory.map((job) => (
                        <div key={job._id} className='bg-gray-900 p-6 rounded-xl border border-gray-700 relative'>
                            <button
                                onClick={() => handleDelete(job._id)}
                                className='absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition'
                            >
                                Delete
                            </button>
                            <h3 className='text-2xl font-bold text-green-500'>{job.jobtitle}</h3>
                            <p className='text-xl text-gray-300 mt-2'>{job.companyName}</p>
                            <p className='text-gray-400 mt-3'>{job.jobdescription}</p>
                            <div className='grid grid-cols-2 gap-4 mt-4'>
                                <div>
                                    <span className='text-gray-500'>Experience:</span>
                                    <span className='ml-2 text-white'>{job.experiance}</span>
                                </div>
                                <div>
                                    <span className='text-gray-500'>Location:</span>
                                    <span className='ml-2 text-white'>{job.location}</span>
                                </div>
                                <div>
                                    <span className='text-gray-500'>Qualification:</span>
                                    <span className='ml-2 text-white'>{job.qualification}</span>
                                </div>
                                <div>
                                    <span className='text-gray-500'>Deadline:</span>
                                    <span className='ml-2 text-white'>
                                        {new Date(job.deadline).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Jobhistory
