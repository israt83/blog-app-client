export const dynamic = 'force-dynamic';

const  aboutPage  = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000)); 

    // throw new Error('Failed to load data for About Page');
  return (
    <div>about Page</div>
  )
}

export default aboutPage