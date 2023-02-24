import { JSXElementConstructor, Key, ReactElement, ReactFragment, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'

import './App.css'
import './normalize.css'

import Loading from './components/Loading/loading.jsx';
import Estados from './components/Estados';
import cidadesPorUf from './components/Cidades';

function App() {

  const [input, setInput] = useState<string>('')
  const [uf, setUf] = useState<string>('')
  const [cidade, setCidade] = useState<string>('')
  const [results, setResults] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [erro, setErro] = useState<boolean>(false)


  const mostraCEP = async () => {
    try {
      setErro(false)
      setResults({})
      setLoading(true)
      const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${input}/json/`)
      const APIConv = await response.json()
      if (APIConv.length == 0 || APIConv[0].logradouro == '') {
        setErro(true)
        setLoading(false)
        setInput('')
      } else {
        setResults(APIConv)
        setLoading(false)
        setInput('')
      }
    }
    catch {
      setErro(true)
      setLoading(false)
      setInput('')
    }
  }

  if (!navigator.onLine) {
    return <h1>Verifique sua conexão</h1>;
  }


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      mostraCEP()
    }
  }


  return (

    <div className='container'>

      <h2 className='title'>Puxa CEP - BRASIL</h2>

      <div className='containerInput'>

        <input required type='text' placeholder='Digite o nome da rua ou avenida.' onKeyDown={handleKeyDown} className='input' value={input} onChange={(e) => {
          setInput(e.target.value)
        }
        } />
        <button className='button' onClick={mostraCEP}><BiSearchAlt /></button>

      </div>

      <div className='divSelect'>

        <select
          required
          value={uf}
          onChange={(e) => setUf(e.target.value)}>

          <option>Selecione um estado</option>

          {Estados.map(estado => (
            <option key={estado.sigla} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}

        </select>

        <select
          required
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        >
          <option>Selecione uma cidade</option>

          {cidadesPorUf[uf]?.map((city: { id: Key; valor: any; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment; }) => (
            <option key={city.valor}>
              {city.nome}
            </option>
          ))}
        </select>

      </div>


      {loading && <Loading />}

      {erro && <h3 className='erro'>Digite uma rua ou avenida válida.</h3>}

      {
        Object.keys(results).length > 0 && (

          <div className='infos'>
            <span className='cep'>CEP: {results[0].cep}</span>
            <span className='rua'><b>Logradouro:</b> {results[0].logradouro}</span>
            <span className='bairro'><b>Bairro:</b> {results[0].bairro}</span>
          </div>
        )
      }

    </div >
  )
}

export default App