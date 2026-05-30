import UserInfo from '@/component/UserInfo';

const UserPage = async ({ params }: { params: Promise<{ id: number }>} ) => {
    const {id} = await params;
  return (
    <div>
      <div>
        <UserInfo id={Number(id)} />
      </div>
    </div>
  )
}

export default UserPage
