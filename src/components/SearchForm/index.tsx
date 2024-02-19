import { SearchFormContainer } from './styles'

interface NumberOfPosts{
  number: string
}
export function SearchForm({number}: NumberOfPosts) {

  return (
    <SearchFormContainer >
      <div>
        <label>Publicações</label>
        <span>{number} publicações</span>
      </div>
      
      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}