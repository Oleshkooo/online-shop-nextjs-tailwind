import { type NextPage } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { RequireAdmin } from '@/components/RequireAdmin'
import { pages } from '@/config/pages'

import { Create } from './shared/Create'
import { Delete } from './shared/Delete'
import { Edit } from './shared/Edit'

const breadcrumbs: Breadcrumb[] = [pages.main, pages.admin]

const Admin: NextPage = () => {
    return (
        <>
            <RequireAdmin />
            <Breadcrumbs data={breadcrumbs} />
            <div className="w-full h-full grid grid-cols-3 place-items-center pt-6">
                <Create />
                <Edit />
                <Delete />
            </div>
        </>
    )
}

export default Admin
