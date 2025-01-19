import { v4 as uuid4v } from 'uuid';

const Topics = ({data}) => {
    return (
        <nav>
            <ul>
                {data.map((item) => (
                    <li key={uuid4v()}>
                        <a href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Topics