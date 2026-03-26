import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BairroRedirect = () => {
  const { neighborhood } = useParams<{ neighborhood: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const mappings: Record<string, string> = {
      'pampulha': '/atendimento/pampulha',
      'savassi': '/atendimento/savassi',
      'buritis': '/atendimento/buritis',
      'castelo': '/atendimento/castelo',
      'santa-efigenia': '/atendimento/santa-efigenia',
      'sion': '/atendimento/sion',
      'ouro-preto': '/atendimento/pampulha',
      'jaragua': '/atendimento/pampulha',
      'aeroporto': '/atendimento/pampulha',
      'zona-norte': '/atendimento/pampulha',
      'centro': '/atendimento/savassi',
      'funcionarios': '/atendimento/savassi',
      'barro-preto': '/atendimento/savassi',
    };

    const destination = mappings[neighborhood || ''] || '/atendimento/pampulha';
    navigate(destination, { replace: true });
  }, [neighborhood, navigate]);

  return null;
};

export default BairroRedirect;
