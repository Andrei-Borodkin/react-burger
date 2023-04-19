import React, { ChangeEvent } from 'react';
import profileStyles from './profile-comp.module.css';
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from "../../services/redux/store";
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { actionSignIn } from '../../services/redux/actionCreators/actionSignIn';
import { fetchSignInNew } from '../../services/redux/thunks/thunkSignNew';

const ProfileComp = () => {

    const { email, name, password, emailNew, nameNew, passwordNew } = useSelector(rSignInSelector);

    const dispatch = useDispatch()


    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionSignIn.setSignInNew(e.target.name, e.target.value))
    }

    const onClickClear = () => {
        dispatch(actionSignIn.clSignInNew())

    }

    const onClickSave = () => {
        dispatch(fetchSignInNew())
    }


    return (
        <>
            <div className={profileStyles.edit}>
                <Input
                    onChange={onFormChange}
                    value={nameNew || name}
                    name={'nameNew'}
                    placeholder="Имя"
                    icon={'EditIcon'}
                    extraClass="mb-2"
                    error={false}
                />

                <EmailInput
                    onChange={onFormChange}
                    value={emailNew || email}
                    name={'emailNew'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <PasswordInput
                    onChange={onFormChange}
                    value={passwordNew || password}
                    name={'passwordNew'}
                    icon={'EditIcon'}
                />

                {(nameNew || emailNew || passwordNew) &&
                    <div>
                        <Button htmlType="button" type="secondary" size="small" extraClass="ml-2" onClick={onClickClear}>
                            Отмена
                        </Button>
                        <Button htmlType="button" type="primary" size="small" extraClass="ml-2" onClick={onClickSave}>
                            Сохранить
                        </Button>

                    </div>
                }

            </div>


        </>
    )

}

export default React.memo(ProfileComp)