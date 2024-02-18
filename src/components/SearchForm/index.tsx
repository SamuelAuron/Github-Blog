import { SearchFormContainer } from './styles'




export function SearchForm() {

  return (
    <SearchFormContainer >
      <div>
        <label>Publicações</label>
        <span>6 publicações</span>
      </div>
      
      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}