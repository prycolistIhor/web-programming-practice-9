import "./BlogCard.css";
export default function BlogCard({
    image,
    category,
    title,
    description,
    author,
}) {
    return (
        <article className="blog-card">
            <div class="card">
                <img
                    src="assets/images/Blog Image.png"
                    alt="Blog Image"
                    class="card-image"
                />

                <div class="card-body">
                    <span class="tag">HTML & CSS</span>
                    <p class="date">Публікація 15 Листопада 2025</p>
                    <h2 class="title">Практична №9</h2>
                    <p class="description">
                        Мета практичної роботи полягає в тому, щоб налаштувати середовище
                        розробки
                        <span class="highlight">VS Code(в моєму випадку neovim)</span>, а
                        також реалізувати картку блогу для вдосконалення фундаментальних
                        навичок з<span class="highlight">HTML</span> та
                        <span class="highlight">CSS</span>.
                    </p>
                </div>

                <div class="card-footer">
                    <img
                        src="assets/images/avatar_male.png"
                        alt="Avatar"
                        class="avatar"
                    />
                    <p class="author">Данилов Ігор Максимович</p>
                </div>
            </div>
        </article>
    );
}
