import Notification from './';

describe('Notification', () => {
	const ts = window.ts;
	const config = {
		type: 'success',
		message: 'Notification test',
		buttonLabel: 'Main Button',
		onaccept: () => 'onaccept',
		onlink: () => 'onlink'
	};
	const myNotification = new Notification();

	it('should support all TS UI notification types', () => {
		myNotification.update({ ...config, type: 'success' });
		expect(ts.ui.Notification.success).toHaveBeenCalled();

		myNotification.update({ ...config, type: 'info' });
		expect(ts.ui.Notification.info).toHaveBeenCalled();

		myNotification.update({ ...config, type: 'error' });
		expect(ts.ui.Notification.error).toHaveBeenCalled();

		myNotification.update({ ...config, type: 'warning' });
		expect(ts.ui.Notification.warning).toHaveBeenCalled();
	});

	it('should call TS UI with all possible parameters', () => {
		config.type = 'warning';
		myNotification.update(config);
		const args = ts.ui.Notification.warning.mock.calls[0];
		expect(args[0]).toEqual('Notification test');
		expect(args[1]).toEqual('Main Button');
		expect(args[2].onaccept()).toEqual('onaccept');
		expect(args[2].onlink()).toEqual('onlink');
	});

	it('should call update on component mount', () => {
		myNotification.update = jest.fn();
		expect(myNotification.update).not.toHaveBeenCalled();
		myNotification.componentDidMount();
		expect(myNotification.update).toHaveBeenCalled();
	});

	it('should call update when it receives new props', () => {
		myNotification.update = jest.fn();
		expect(myNotification.update).not.toHaveBeenCalled();
		myNotification.componentWillReceiveProps({});
		expect(myNotification.update).toHaveBeenCalled();
	});

	it('should render null', () => {
		expect(myNotification.render()).toBe(null);
	});
});
