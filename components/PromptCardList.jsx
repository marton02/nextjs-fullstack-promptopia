import PromptCard from './PromptCard'

function PromptCardList({data, handleTagClick, handleEdit, handleDelete}) {
  return (
    <div className="mt-16 prompt_layout">
        {
            data.map((prompt) => (
                <PromptCard
                    key={prompt.id}
                    post={prompt}
                    handleTagClick={handleTagClick}
                    handleEdit={() => handleEdit && handleEdit(prompt)}
                    handleDelete={() => handleDelete && handleDelete(prompt)}
                />
            ))
        }
    </div>
  )
}

export default PromptCardList