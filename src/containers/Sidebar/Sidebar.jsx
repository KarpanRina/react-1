import './Sidebar.scss'
import Topics from '../../components/Topics'
import data from '../../data/data.json'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <Topics data = {data} />
        </div>
    )

}

export default Sidebar