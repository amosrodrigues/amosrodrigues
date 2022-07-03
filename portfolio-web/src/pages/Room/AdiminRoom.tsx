import { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import emptyQuestions from '../../assets/images/empty-questions.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import Swal from 'sweetalert2';

import { StyledRoom } from './styles';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId as string);
  
  async function handleEndRoom() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Cancelar!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire(
          'Excluído!',
          'Exclusão efetuada com sucesso.',
          'success'
          )
          await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
          })
          navigate('/contact');
        }
        navigate('/contact');
    })    
  }

  async function handleDeleteQuestion(questionId: string) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Cancelar!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          'Exclusão efetuada com sucesso.',
          'success'
          )
          await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    })
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  } 

  async function handleHighlightQuestion(questionId: string, isHighlighted: boolean) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !isHighlighted,
    })
  } 
  
  return (
    <StyledRoom>
      <div className="section">
        <div id="page-room">
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <header>
            <div className="content">
              <img src={logoImg} alt="Letmeask" />
              <div>
                <RoomCode code={roomId as string}/>
                <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
              </div>
            </div>
          </header>

          <main>
            <div className="room-title">
              <h1>Sala {title}</h1>
              { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
            </div>

            <div className="question-list">
              { (questions.length > 0) ? questions.map(question => {
                return (
                    <Question 
                      key={question.id}
                      content={question.content}
                      author={question.author}
                      isAnswered={question.isAnswered}
                      isHighlighted={question.isHighlighted}
                    >

                      {!question.isAnswered && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                            title='Marcar como respondida!'
                          >
                            <img src={checkImg} alt="Marcar pergunta como respondida" />
                          </button>
          
                          <button
                            type="button"
                            onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                            title='Destaque a pergunta!'
                          >
                            <img src={answerImg} alt="Destaque à Pergunta" />
                          </button>
                        </>
                      )} 
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(question.id)}
                        title='Excluir pergunta!'
                      >
                        <img src={deleteImg} alt="Remover Pergunta" />
                      </button>
                    </Question>
                  );
                }) : 
                <div className="empty-question">
                  <img src={ emptyQuestions } alt="Empty Question" />
                  <h2>Nenhuma pergunta por aqui...</h2>
                  <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
                </div>
              }
            </div>      
          </main>
        </div>
      </div>
    </StyledRoom>
  );
}