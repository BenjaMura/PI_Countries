import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../redux/actions';
import validationForm from '../../helpers/Validations/ValidationForm';
import stylesForm from './Form.module.css';
import Loading from '../../components/Loading/Loading';

const Form = () => {
    
    const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });
    const [errors, setErrors] = useState({});
    let [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 500);
        dispatch(getCountries());
    }, [dispatch])

    const isFormEmpty = useMemo(() => {
        for (const key in form) {
          if (form[key] !== '' && form[key].length !== 0) {
            return false;
          }
        }
        return true;
    }, [form]);
    
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        setErrors(validationForm({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCountries = (event) => {
        const selectedCountry = event.target.value;
        const updatedCountries = event.target.checked
            ? [...form.countries, selectedCountry]
            : form.countries.filter(country => country !== selectedCountry);
        setForm({
            ...form,
            countries: updatedCountries,
        });
        setErrors(validationForm({ ...form, countries: updatedCountries }));
    };

    const handleSubmit = () => {
        dispatch(postActivity(form));
        alert("Your activity has been added");
    };

    return (
        <div className={stylesForm.div}>
            {loading ? (
                <Loading />
            ) : (
            <div className={stylesForm.divForm}>
            <form onSubmit={handleSubmit} className={stylesForm.form}>
                <div>
                    <label htmlFor='name' className={stylesForm.labels}>Name</label>
                    <input type='text' name='name' className={stylesForm.inputs} placeholder="Type activity's name..." value={form.name} onChange={handleChange}/>
                    {errors.name && <span className={stylesForm.spans}>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor='difficulty' className={stylesForm.labels}>Difficulty</label>
                    <input type='text' name='difficulty' className={stylesForm.inputs} placeholder="Type activity's difficulty... (Max: 5 - Min: 1)" value={form.difficulty} onChange={handleChange}/>
                    {errors.difficulty && <span className={stylesForm.spans}>{errors.difficulty}</span>}
                </div>
                <div>
                    <label htmlFor='duration' className={stylesForm.labels}>Duration</label>
                    <input type='text' name='duration' className={stylesForm.inputs} placeholder="Type activity's duration..." value={form.duration} onChange={handleChange}/>
                    {errors.duration && <span className={stylesForm.spans}>{errors.duration}</span>}
                </div>
                <div>
                    <label htmlFor='season' className={stylesForm.labels}>Season</label>
                        <label><input id="Summer" type="radio" name="season" value="Summer" onChange={handleChange} className={stylesForm.inputs}/> Summer</label>
                        <label><input id="Autumn" type="radio" name="season" value="Autumn" onChange={handleChange} className={stylesForm.inputs}/> Autumn</label>
                        <label><input id="Winter" type="radio" name="season" value="Winter" onChange={handleChange} className={stylesForm.inputs}/> Winter</label>
                        <label><input id="Spring" type="radio" name="season" value="Spring" onChange={handleChange} className={stylesForm.inputs}/> Spring</label>
                    {errors.season && <span className={stylesForm.spans}>{errors.season}</span>}
                </div>
                <div>
                    <label htmlFor='countries' className={stylesForm.labels}>Countries</label>
                    <div className={stylesForm.divCountries}>
                        {countries.map((event) => (
                            <div key={event.id}>
                                <input id={event.id} type="checkbox" value={event.name} name={event.name} onChange={handleCountries} disabled={form.countries.includes(event.target)? true : false}/>
                                <label htmlFor={event.id} className={stylesForm.labelCountries}>{event.name}</label>
                            </div>
                        ))}
                        {errors.countries && <span className={stylesForm.spans}>{errors.countries}</span>}
                    </div>
                </div>
                <button className={stylesForm.btnSubmit} type='submit' disabled={isFormEmpty || Object.keys(errors).length}>Add activity</button>
            </form>
            </div>
            )}
        </div>
    );
};

export default Form;