import React, {useState} from 'react';
import styles from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {addContact} from '../../api/public';
import basePath from '../../utils/basePath';
import {toast} from 'react-toastify';
import {useTheme} from '../../core/ThemeProvider';

function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const {currentTheme} = useTheme();
  const [lastSubmitTime, setLastSubmitTime] = useState(Date.now());

  async function submit() {
    if (Date.now() - lastSubmitTime < 5000) return;
    try {
      await addContact({
        name,
        contact,
        message,
      });
      setMessage('');
      setName('');
      setContact('');
      setLastSubmitTime(Date.now());
      toast.success('I\'ll contact you back asap!', {
        theme: currentTheme
      });
    } catch (e: any) {
      switch (e.body.statusCode) {
        case 409:
          toast.error('Message already dropped by this contact', {
            theme: currentTheme
          });
          break;
        default: toast.error('Server Error!', {theme: currentTheme});
      }
    }
  }

  return <div className={'page-body ' + styles.contactPage}>
    <div className={'card ' + styles.centerDiv}>
      <div className={styles.header}>
        <a href={'https://wa.me/+917802004735'} target={'_blank'} rel="noreferrer">
          <img src={basePath + '/icons/whatsapp.png'} alt="whatsapp"/>
          &nbsp;+91 7802004735
        </a>
        <a href={'https://mail.google.com/mail/?view=cm&to=code.harshkanjariya@gmail.com'} target={'_blank'}
           rel="noreferrer">
          <img src={basePath + '/icons/email.png'} alt="email"/>
          &nbsp;code.harshkanjariya@gmail.com
        </a>
      </div>
      <div className={styles.separator}><span>OR</span></div>
      <h3>Drop me a message</h3>
      <div className={'flex-col ' + styles.form}>
        <Input
          value={name}
          className={styles.input}
          hint={'Name'}
          onChange={(v) => setName(v)}
        />
        <Input
          value={contact}
          className={styles.input}
          hint={'Email or phone'}
          onChange={(v) => setContact(v)}
        />
        <textarea
          value={message}
          className={styles.textarea}
          cols={30}
          rows={10}
          placeholder={'Message'}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div className={styles.footer}>
        <Button text={'Submit'} onClick={submit}/>
      </div>
    </div>
  </div>;
}

export default Contact;