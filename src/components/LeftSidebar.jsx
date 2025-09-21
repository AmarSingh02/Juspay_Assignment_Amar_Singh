

import React from 'react';
import { Bell, User, Bug, FileText } from 'lucide-react';

const LeftSidebar = () => {
  const notifications = [
    { icon: <Bug size={20} color="#6B7280" />, text: "You have a bug that needs...", time: "Just now", isHighlighted: false },
    { icon: <User size={20} color="#6B7280" />, text: "New user registered", time: "2 minutes ago", isHighlighted: false },
    { icon: <Bug size={20} color="#6B7280" />, text: "You have a bug that needs...", time: "12 hours ago", isHighlighted: false },
    { icon: <Bell size={20} color="#FB923C" />, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM", isHighlighted: true }
  ];

  const activities = [
    { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", text: "You have a bug that needs...", time: "Just now" },
    { avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face", text: "Released a new version", time: "2 minutes ago" },
    { icon: <FileText size={20} color="#3B82F6" />, text: "Submitted a bug", time: "12 hours ago" },
    { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", text: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face", text: "Deleted a page in Project X", time: "Feb 2, 2023" }
  ];

  const contacts = [
    { name: "Natali Craig", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=32&h=32&fit=crop&crop=face" },
    { name: "Drew Cano", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", isOnline: true },
    { name: "Orlando Diggs", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
    { name: "Andi Lane", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
    { name: "Kate Morrison", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face" },
    { name: "Koray Okumus", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" }
  ];

  const renderAvatar = (avatar, fallbackIcon = <User size={18} color="#6B7280" />) => (
    <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {avatar ? (
        <img
          src={avatar}
          alt="avatar"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => e.currentTarget.replaceWith(
            Object.assign(document.createElement('div'), {
              style: `width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f3f4f6;border-radius:50%;`,
              innerHTML: fallbackIcon.props.children
            })
          )}
        />
      ) : fallbackIcon}
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <div style={{
        width: '190px',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        height: '100vh',
        overflowY: 'auto',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}>

        {/* Notifications */}
        <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px' }}>
            <Bell size={16} color="#6B7280" />
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#1f2937' }}>Notifications</h3>
          </div>
          {notifications.map((notification, index) => (
            <div key={index} style={{
              padding: '12px 16px',
              cursor: 'pointer',
              backgroundColor: notification.isHighlighted ? '#fff7ed' : 'transparent',
              borderLeft: notification.isHighlighted ? '4px solid #fb923c' : '4px solid transparent',
              transition: 'background-color 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div>{notification.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{notification.text}</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6b7280' }}>{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#1f2937', padding: '16px 16px 8px 16px' }}>Activities</h3>
          {activities.map((activity, index) => (
            <div key={index} style={{
              padding: '12px 16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {activity.avatar ? renderAvatar(activity.avatar) : activity.icon}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{activity.text}</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6b7280' }}>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contacts */}
        <div>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#1f2937', padding: '16px 16px 8px 16px' }}>Contacts</h3>
          {contacts.map((contact, index) => (
            <div key={index} style={{
              padding: '12px 16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ position: 'relative' }}>
                {renderAvatar(contact.avatar)}
                {contact.isOnline && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#10b981',
                    border: '2px solid white',
                    borderRadius: '50%'
                  }}></div>
                )}
              </div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: '#1f2937', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LeftSidebar;
