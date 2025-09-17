import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Iconos SVG para una interfaz limpia ---
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>;
const RestartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-4.5a.75.75 0 00-.75.75v4.5l1.903-1.903a5.25 5.25 0 10-9.279 3.646.75.75 0 01-1.22-.872zm14.49 4.341a7.5 7.5 0 01-12.548 3.364l-1.903-1.903h4.5a.75.75 0 00.75-.75v-4.5l-1.903 1.903a5.25 5.25 0 109.279-3.646.75.75 0 011.22.872z" clipRule="evenodd" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.006a.75.75 0 01-.749.658H7.25a.75.75 0 01-.749-.658L5.495 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.9h1.368c1.603 0 2.816 1.336 2.816 2.9zM5.25 6.75c0-.621.504-1.125 1.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H6.375c-.621 0-1.125-.504-1.125-1.125V6.75z" clipRule="evenodd" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a.75.75 0 00-.22 1.062l.158.212a.75.75 0 001.062-.22l12.15-12.15z" /><path d="M5.604 21a.75.75 0 00-.75.75c0 .414.336.75.75.75h12.75a.75.75 0 000-1.5H5.604z" /></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 3v10.938l-4.12-2.262a.75.75 0 00-.996.069l-.333.606a.75.75 0 00.323 1.043l5.25 2.888a.75.75 0 00.996-.07l5.25-2.888a.75.75 0 00.323-1.043l-.333-.606a.75.75 0 00-.996-.069l-4.12 2.262V3a.75.75 0 00-1.5 0z" /><path d="M11.25 21a.75.75 0 001.5 0v-6.321a4.5 4.5 0 00-1.5 0V21z" /></svg>;

// --- Componente de Música (Simulado) ---
const MusicPlayer = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-80 backdrop-blur-sm p-3 rounded-lg text-white shadow-lg">
            {!isConnected ? (
                <button 
                    onClick={() => setIsConnected(true)}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors"
                >
                    <MusicIcon /> Conectar Spotify
                </button>
            ) : (
                <div className="flex items-center gap-4">
                    <p className="font-semibold text-sm">Workout Mix</p>
                    <button onClick={() => setIsPlaying(!isPlaying)} className="text-white">
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
            )}
            <p className="text-xs text-gray-400 mt-2 text-center">Control de música (simulado)</p>
        </div>
    );
};

// --- Hook personalizado para la síntesis de voz ---
const useSpeech = () => {
    const speak = useCallback((text, lang = 'es-ES') => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 1.1;
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn("La síntesis de voz no es soportada en este navegador.");
        }
    }, []);

    return { speak };
};

// --- Pantalla del Creador de Entrenamientos ---
const WorkoutCreator = ({ onSave, workoutToEdit, onCancel }) => {
    const [name, setName] = useState('');
    const [exercises, setExercises] = useState([{ name: 'Sentadillas', work: 20, rest: 10 }]);
    const [sets, setSets] = useState(4);
    const [restBetweenSets, setRestBetweenSets] = useState(60);
    const [id, setId] = useState(null);
    const [nameError, setNameError] = useState(false);

    useEffect(() => {
        if (workoutToEdit) {
            setName(workoutToEdit.name);
            setExercises(workoutToEdit.exercises);
            setSets(workoutToEdit.sets);
            setRestBetweenSets(workoutToEdit.restBetweenSets);
            setId(workoutToEdit.id);
        }
    }, [workoutToEdit]);

    const handleExerciseChange = (index, field, value) => {
        const newExercises = [...exercises];
        newExercises[index][field] = value;
        setExercises(newExercises);
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', work: 30, rest: 15 }]);
    };

    const removeExercise = (index) => {
        const newExercises = exercises.filter((_, i) => i !== index);
        setExercises(newExercises);
    };

    const handleSave = () => {
        if (!name.trim()) {
            setNameError(true);
            setTimeout(() => setNameError(false), 2500);
            return;
        }
        const newWorkout = {
            id: id || Date.now(),
            name,
            exercises,
            sets: Number(sets),
            restBetweenSets: Number(restBetweenSets)
        };
        onSave(newWorkout);
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen animate-fade-in">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">{workoutToEdit ? 'Editar Entrenamiento' : 'Crear Entrenamiento'}</h2>
            
            <div className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        if (nameError) setNameError(false);
                    }}
                    placeholder="Nombre del Entrenamiento (ej: HIIT Total)"
                    className={`w-full p-3 bg-gray-800 rounded-lg border-2 ${nameError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-cyan-400 transition-colors`}
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Rondas</label>
                        <input type="number" min="1" value={sets} onChange={(e) => setSets(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Descanso entre Rondas (s)</label>
                        <input type="number" min="0" value={restBetweenSets} onChange={(e) => setRestBetweenSets(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700"/>
                    </div>
                </div>

                <h3 className="text-xl font-semibold pt-4">Ejercicios</h3>
                <div className="space-y-3">
                    {exercises.map((ex, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-gray-800 rounded-lg">
                            <input type="text" value={ex.name} onChange={(e) => handleExerciseChange(index, 'name', e.target.value)} placeholder="Nombre Ejercicio" className="flex-grow p-2 bg-gray-700 rounded-md w-full sm:w-auto"/>
                            <input type="number" min="1" value={ex.work} onChange={(e) => handleExerciseChange(index, 'work', parseInt(e.target.value) || 0)} placeholder="Work" className="w-20 p-2 bg-gray-700 rounded-md text-center"/>
                            <input type="number" min="0" value={ex.rest} onChange={(e) => handleExerciseChange(index, 'rest', parseInt(e.target.value) || 0)} placeholder="Rest" className="w-20 p-2 bg-gray-700 rounded-md text-center"/>
                            <button onClick={() => removeExercise(index)} className="p-2 text-red-500 hover:text-red-400">
                                <TrashIcon />
                            </button>
                        </div>
                    ))}
                </div>
                
                <button onClick={addExercise} className="w-full mt-2 py-2 px-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold flex items-center justify-center gap-2">
                    <PlusIcon /> Añadir Ejercicio
                </button>
            </div>
            
            <div className="flex gap-4 mt-8">
                <button onClick={handleSave} className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 rounded-lg font-bold text-lg">
                    Guardar
                </button>
                <button onClick={onCancel} className="flex-1 py-3 px-4 bg-gray-600 hover:bg-gray-700 rounded-lg font-bold text-lg">
                    Cancelar
                </button>
            </div>
        </div>
    );
};

// --- Pantalla del Temporizador ---
const TimerScreen = ({ workout, onBack }) => {
    const [phase, setPhase] = useState('prepare'); // prepare, work, rest, setRest, finished
    const [currentSet, setCurrentSet] = useState(1);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10); // 10s para preparación
    const [isPaused, setIsPaused] = useState(false);
    
    const { speak } = useSpeech();
    const totalTime = useRef(10);
    const intervalRef = useRef(null);

    const currentExercise = workout.exercises[currentExerciseIndex];

    const startNextPhase = useCallback(() => {
        if (phase === 'prepare') {
            setPhase('work');
            const workTime = currentExercise.work;
            setTimeLeft(workTime);
            totalTime.current = workTime;
            speak(`¡Empezamos! ${currentExercise.name}`);
        } else if (phase === 'work') {
            if (currentExercise.rest > 0) {
                setPhase('rest');
                const restTime = currentExercise.rest;
                setTimeLeft(restTime);
                totalTime.current = restTime;
                speak('Descansa');
            } else { // Si no hay descanso, pasa al siguiente ejercicio directamente
                 const isLastExercise = currentExerciseIndex === workout.exercises.length - 1;
                 if (!isLastExercise) {
                     setCurrentExerciseIndex(prev => prev + 1);
                     setPhase('work');
                     const nextExercise = workout.exercises[currentExerciseIndex + 1];
                     const workTime = nextExercise.work;
                     setTimeLeft(workTime);
                     totalTime.current = workTime;
                     speak(nextExercise.name);
                 } else { // Si es el último ejercicio y no tiene descanso, pasa al descanso de ronda
                     if (currentSet < workout.sets) {
                        setCurrentSet(prev => prev + 1);
                        setCurrentExerciseIndex(0);
                        setPhase('setRest');
                        const setRestTime = workout.restBetweenSets;
                        setTimeLeft(setRestTime);
                        totalTime.current = setRestTime;
                        speak(`Ronda ${currentSet + 1}. Tómate un respiro.`);
                    } else {
                        setPhase('finished');
                        speak('¡Entrenamiento completado! ¡Gran trabajo!');
                        clearInterval(intervalRef.current);
                    }
                 }
            }
        } else if (phase === 'rest' || phase === 'setRest') {
            const isLastExercise = currentExerciseIndex === workout.exercises.length - 1;
            if (isLastExercise) {
                if (currentSet < workout.sets) {
                    setCurrentSet(prev => prev + 1);
                    setCurrentExerciseIndex(0);
                    setPhase('setRest');
                    const setRestTime = workout.restBetweenSets;
                    setTimeLeft(setRestTime);
                    totalTime.current = setRestTime;
                    speak(`Ronda ${currentSet + 1}. Tómate un respiro.`);
                } else {
                    setPhase('finished');
                    speak('¡Entrenamiento completado! ¡Gran trabajo!');
                    clearInterval(intervalRef.current);
                }
            } else {
                setCurrentExerciseIndex(prev => prev + 1);
                setPhase('work');
                const nextExercise = workout.exercises[currentExerciseIndex + 1];
                const workTime = nextExercise.work;
                setTimeLeft(workTime);
                totalTime.current = workTime;
                speak(nextExercise.name);
            }
        }
    }, [phase, currentSet, currentExerciseIndex, workout, speak, currentExercise]);


    useEffect(() => {
        if (isPaused || phase === 'finished') {
            clearInterval(intervalRef.current);
            return;
        }

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    startNextPhase();
                    return 0;
                }
                if (prev <= 4 && prev > 1) {
                    speak(`${prev - 1}`);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isPaused, phase, startNextPhase]);
    
    useEffect(() => {
        speak('Prepárate');
    }, [speak]);

    const togglePause = () => {
        setIsPaused(!isPaused);
        if (isPaused) speak('Reanudando');
        else {
            speak('Pausa');
            window.speechSynthesis.cancel();
        }
    };
    
    const restartWorkout = () => {
        setPhase('prepare');
        setCurrentSet(1);
        setCurrentExerciseIndex(0);
        setTimeLeft(10);
        totalTime.current = 10;
        setIsPaused(false);
        speak('Reiniciando. Prepárate.');
    };

    const getPhaseInfo = () => {
        switch (phase) {
            case 'prepare': return { text: 'PREPÁRATE', color: 'text-yellow-400', progressColor: 'stroke-yellow-400' };
            case 'work': return { text: `TRABAJO: ${currentExercise.name}`, color: 'text-green-400', progressColor: 'stroke-green-400' };
            case 'rest': return { text: 'DESCANSO', color: 'text-cyan-400', progressColor: 'stroke-cyan-400' };
            case 'setRest': return { text: 'DESCANSO LARGO', color: 'text-blue-400', progressColor: 'stroke-blue-400' };
            case 'finished': return { text: '¡COMPLETADO!', color: 'text-purple-400', progressColor: 'stroke-purple-400' };
            default: return { text: '', color: '', progressColor: '' };
        }
    };

    const { text, color, progressColor } = getPhaseInfo();

    if (phase === 'finished') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4 animate-fade-in">
                <h1 className="text-5xl font-bold text-purple-400 mb-4">¡Felicidades!</h1>
                <p className="text-xl text-gray-300 mb-8">Has completado el entrenamiento "{workout.name}".</p>
                <div className="flex gap-4">
                    <button onClick={onBack} className="py-3 px-6 bg-cyan-500 rounded-lg font-semibold">Volver</button>
                    <button onClick={restartWorkout} className="py-3 px-6 bg-gray-700 rounded-lg font-semibold">Repetir</button>
                </div>
            </div>
        );
    }
    
    const nextExerciseName = phase === 'rest' && currentExerciseIndex < workout.exercises.length - 1
        ? workout.exercises[currentExerciseIndex + 1].name
        : (phase === 'setRest' ? workout.exercises[0].name : '');

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white p-4 justify-between">
            <div className="flex justify-between items-center">
                <button onClick={onBack} className="text-lg font-semibold py-2 px-4 bg-gray-800 rounded-lg">&larr; Salir</button>
                <div className="text-right">
                    <p className="text-2xl font-bold">{workout.name}</p>
                    <p className="text-lg text-gray-400">Ronda {currentSet} / {workout.sets}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-grow relative">
                <svg className="w-80 h-80 transform -rotate-90">
                    <circle cx="160" cy="160" r="150" strokeWidth="10" className="stroke-gray-700" fill="transparent" />
                    <circle
                        cx="160"
                        cy="160"
                        r="150"
                        strokeWidth="10"
                        className={`${progressColor} transition-all duration-500`}
                        fill="transparent"
                        strokeDasharray="942"
                        strokeDashoffset={942 - (timeLeft / totalTime.current) * 942}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute flex flex-col items-center">
                    <p className={`text-2xl font-semibold uppercase ${color} text-center px-4`}>{text}</p>
                    <p className="text-8xl font-mono font-bold tracking-tighter">{timeLeft}</p>
                    {nextExerciseName && <p className="text-gray-400 mt-2">Siguiente: {nextExerciseName}</p>}
                </div>
            </div>

            <div className="flex justify-center items-center gap-6 pb-6">
                <button onClick={restartWorkout} className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                    <RestartIcon />
                </button>
                <button onClick={togglePause} className="p-6 bg-cyan-500 rounded-full text-gray-900 shadow-lg shadow-cyan-500/30 scale-110 hover:bg-cyan-400 transition-transform">
                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                </button>
                 <button className="p-4 bg-gray-800 rounded-full opacity-50 cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" /></svg>
                </button>
            </div>
            <MusicPlayer />
        </div>
    );
};

// --- Pantalla de Inicio ---
const HomeScreen = ({ workouts, onCreate, onStart, onEdit, onDelete }) => {
    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-2">Interval<span className="text-cyan-400">Flow</span></h1>
            <p className="text-gray-400 mb-8">Tus entrenamientos por intervalos, a tu manera.</p>

            {workouts.length === 0 ? (
                <div className="text-center py-16 px-6 bg-gray-800 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">¡Bienvenido!</h2>
                    <p className="text-gray-400 mb-6">Aún no has creado ningún entrenamiento. ¡Empecemos!</p>
                    <button onClick={onCreate} className="py-3 px-8 bg-cyan-500 hover:bg-cyan-600 rounded-full font-bold text-lg transition-transform hover:scale-105">
                        Crear mi primer entrenamiento
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {workouts.map(workout => (
                        <div key={workout.id} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-lg animate-fade-in-up">
                            <div>
                                <h3 className="text-xl font-semibold">{workout.name}</h3>
                                <p className="text-sm text-gray-400">
                                    {workout.sets} Rondas &bull; {workout.exercises.length} Ejercicios
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                 <button onClick={() => onEdit(workout)} className="p-2 text-gray-400 hover:text-white"><EditIcon/></button>
                                 <button onClick={() => onDelete(workout.id)} className="p-2 text-gray-400 hover:text-red-500"><TrashIcon/></button>
                                <button onClick={() => onStart(workout)} className="py-2 px-5 bg-cyan-500 hover:bg-cyan-600 rounded-full font-bold">
                                    Empezar
                                </button>
                            </div>
                        </div>
                    ))}
                     <button onClick={onCreate} className="w-full mt-4 py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold flex items-center justify-center gap-2">
                        <PlusIcon /> Crear nuevo entrenamiento
                    </button>
                </div>
            )}
        </div>
    );
};

// --- Componente Modal de Confirmación ---
const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl max-w-sm w-full mx-4">
                <p className="text-white text-lg mb-6 text-center">{message}</p>
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={onConfirm} 
                        className="py-2 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white transition-colors"
                    >
                        Eliminar
                    </button>
                    <button 
                        onClick={onCancel} 
                        className="py-2 px-6 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-colors"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Componente Principal de la Aplicación ---
export default function App() {
    const [page, setPage] = useState('home'); // home, creator, timer
    const [workouts, setWorkouts] = useState([]);
    const [currentWorkout, setCurrentWorkout] = useState(null);
    const [workoutToEdit, setWorkoutToEdit] = useState(null);
    const [workoutToDelete, setWorkoutToDelete] = useState(null); // ID del workout a eliminar
    
    // Simulación de persistencia con localStorage
    useEffect(() => {
        try {
            const savedWorkouts = localStorage.getItem('intervalFlowWorkouts');
            if (savedWorkouts) {
                setWorkouts(JSON.parse(savedWorkouts));
            } else {
                const exampleWorkout = {
                    id: 'example1',
                    name: 'Tabata Clásico (Ejemplo)',
                    exercises: [
                        { name: 'Burpees', work: 20, rest: 10 },
                        { name: 'Mountain Climbers', work: 20, rest: 10 },
                        { name: 'Jumping Jacks', work: 20, rest: 10 },
                        { name: 'High Knees', work: 20, rest: 10 }
                    ],
                    sets: 4,
                    restBetweenSets: 60
                };
                setWorkouts([exampleWorkout]);
                localStorage.setItem('intervalFlowWorkouts', JSON.stringify([exampleWorkout]));
            }
        } catch (error) {
            console.error("No se pudo cargar los entrenamientos:", error);
            setWorkouts([]);
        }
    }, []);

    const saveWorkouts = (newWorkouts) => {
        setWorkouts(newWorkouts);
        localStorage.setItem('intervalFlowWorkouts', JSON.stringify(newWorkouts));
    };

    const handleSaveWorkout = (workout) => {
        const existingIndex = workouts.findIndex(w => w.id === workout.id);
        let newWorkouts;
        if (existingIndex > -1) {
            newWorkouts = [...workouts];
            newWorkouts[existingIndex] = workout;
        } else {
            newWorkouts = [...workouts, workout];
        }
        saveWorkouts(newWorkouts);
        setPage('home');
        setWorkoutToEdit(null);
    };
    
    const handleStartWorkout = (workout) => {
        setCurrentWorkout(workout);
        setPage('timer');
    };

    const handleCreateNew = () => {
        setWorkoutToEdit(null);
        setPage('creator');
    };
    
    const handleEditWorkout = (workout) => {
        setWorkoutToEdit(workout);
        setPage('creator');
    };

    const handleDeleteRequest = (id) => {
        setWorkoutToDelete(id);
    };

    const confirmDelete = () => {
        if (workoutToDelete) {
            const newWorkouts = workouts.filter(w => w.id !== workoutToDelete);
            saveWorkouts(newWorkouts);
            setWorkoutToDelete(null);
        }
    };

    const cancelDelete = () => {
        setWorkoutToDelete(null);
    };
    
    const renderPage = () => {
        switch (page) {
            case 'creator':
                return <WorkoutCreator onSave={handleSaveWorkout} workoutToEdit={workoutToEdit} onCancel={() => setPage('home')} />;
            case 'timer':
                return <TimerScreen workout={currentWorkout} onBack={() => setPage('home')} />;
            case 'home':
            default:
                return <HomeScreen 
                    workouts={workouts} 
                    onCreate={handleCreateNew} 
                    onStart={handleStartWorkout}
                    onEdit={handleEditWorkout}
                    onDelete={handleDeleteRequest}
                />;
        }
    };

    return (
        <main className="bg-gray-900 font-sans">
            {renderPage()}
            {workoutToDelete && (
                <ConfirmModal
                    message="¿Estás seguro de que quieres eliminar este entrenamiento?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </main>
    );
}

