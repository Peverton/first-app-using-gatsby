import styled from 'styled-components';
import Icons from '../../components/Icons';

export const EmailWrapper = styled(Icons.Email)`
  color: ${props => props.color ? props.color: '#e3a617'};
  width: ${props => props.width ? props.width: '100px'};
  margin-right: 10px;
`;

export const PhoneWrapper = styled(Icons.Phone)`
  color: ${props => props.color ? props.color: '#e3a617'};
  width: ${props => props.width ? props.width: '100px'};
  margin-right: 10px;
`;

export const LocationWrapper = styled(Icons.Location)`
  color: ${props => props.color ? props.color: '#e3a617'};
  width: ${props => props.width ? props.width: '100px'};
  margin-right: 10px;
`;