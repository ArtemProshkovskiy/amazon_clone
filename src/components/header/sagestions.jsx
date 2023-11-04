import products from './../../data/products.json';
import {Link} from "react-router-dom";

function Suggestions(props) {
    const {sug, searchQuery} = props;

    // Filter products based on the search query
    const filteredProducts = Object.values(products).filter((product) => {
        // You can customize this filtering logic based on your search requirements
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });




    return (
        <div className='sug absolute top-[68px] min-w-[595px] z-50'>
            {sug && filteredProducts.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md border-[0.5px] border-gray-500 p-4">
                    <div>
                        <h2 className="text-black text-2xl font-semibold mb-4">Suggested Products</h2>
                        <ul>
                            {filteredProducts.map((product) => (
                                <Link to={`/product/${product.id}`}
                                      key={product.id}> {/* Wrap the entire list item with Link */}
                                    <li className="flex items-center space-x-2 mb-2">
                                        <div className="w-12 h-12">
                                            <img
                                                src={require(`./../../${product.image}`)}
                                                alt={product.title}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <span className="text-lg font-semibold text-black">{product.title}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Suggestions;
