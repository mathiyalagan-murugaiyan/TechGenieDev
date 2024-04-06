import React from 'react';
import '../css/category.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Category({ onSelectCategory }) {
    const categories = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SpringBoot', 'Django', 'API Design', 'Postman', 'CMD', 'Ethical Hacking', 'Digital Marketing', 'SEO', 'Notion']; // Add more categories as needed

return (
    <div className="row justify-content-center mb-3">
        <div className="col-md-12 text-center">
            <div className="btn-group d-flex flex-wrap" role="group" aria-label="Course Categories">
                {categories.map((category, index) => (
                    <button
                    key={index}
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => onSelectCategory(category)}
                    >
                    {category}
                    </button>
                ))}
            </div>
        </div>
    </div>
);
}

export default Category;