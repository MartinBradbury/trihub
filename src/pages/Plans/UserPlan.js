import React from 'react'
import Goals from './Goals'

const UserPlan = () => {
  return (
    <div>
        <p>
          <Goals />
          <button>
            <a href="goals/create">Create Goal</a>
          </button>
        </p>
    </div>
  )
}

export default UserPlan