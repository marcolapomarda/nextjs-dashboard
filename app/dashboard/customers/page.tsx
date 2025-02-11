import Table from '@/app/ui/customers/table';
import { fetchCustomersTable } from '@/app/lib/data';

export default async function Page() {
    const customers = await fetchCustomersTable();
    console.log(customers);
    return (
        <main>
            <Table customers={customers} />
        </main>
    );
}