import React from 'react'
import Table from '../table/Table'
import { columns } from '../../shared/columns'
import { user } from '../../data'

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Users</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={user} />
        </div>
      </main>
    </div>
  )
}

export default UsersPage
