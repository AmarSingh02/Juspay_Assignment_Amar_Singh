import React from 'react';
import { Bell, User, Bug, FileText } from 'lucide-react';
import { useTheme } from '@mui/material/styles';

const LeftSidebar = () => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  
  // Theme colors using Material-UI theme palette
  const colors = {
    background: theme.palette.background.paper,
    surface: theme.palette.action.hover,
    border: theme.palette.divider,
    text: {
      primary: theme.palette.text.primary,
      secondary: theme.palette.text.secondary,
    },
    highlight: {
      background: isDarkTheme ? '#2d1b14' : '#fff7ed',
      border: '#fb923c'
    },
    online: '#10b981'
  };

  const notifications = [
    { 
      icon: <Bug size={16} color={colors.text.secondary} />, 
      text: "You have a bug that needs...", 
      time: "Just now", 
      isHighlighted: false 
    },
    { 
      icon: <User size={16} color={colors.text.secondary} />, 
      text: "New user registered", 
      time: "2 minutes ago", 
      isHighlighted: false 
    },
    { 
      icon: <Bug size={16} color={colors.text.secondary} />, 
      text: "You have a bug that needs...", 
      time: "12 hours ago", 
      isHighlighted: false 
    },
    { 
      icon: <Bell size={16} color="#FB923C" />, 
      text: "Andi Lane subscribed to you", 
      time: "Today, 11:59 AM", 
      isHighlighted: true 
    }
  ];

  const activities = [
    { 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", 
      text: "You have a bug that needs...", 
      time: "Just now" 
    },
    { 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face", 
      text: "Released a new version", 
      time: "2 minutes ago" 
    },
    { 
      icon: <FileText size={16} color="#3B82F6" />, 
      text: "Submitted a bug", 
      time: "12 hours ago" 
    },
    { 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", 
      text: "Modified A data in Page X", 
      time: "Today, 11:59 AM" 
    },
    { 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face", 
      text: "Deleted a page in Project X", 
      time: "Feb 2, 2023" 
    }
  ];

  const contacts = [
    { 
      name: "Natali Craig", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=32&h=32&fit=crop&crop=face" 
    },
    { 
      name: "Drew Cano", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face", 
      isOnline: true 
    },
    { 
      name: "Orlando Diggs", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
    },
    { 
      name: "Andi Lane", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" 
    },
    { 
      name: "Kate Morrison", 
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face" 
    },
    { 
      name: "Koray Okumus", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" 
    }
  ];

  const renderAvatar = (avatar, icon, size = 32) => {
    if (avatar) {
      return (
        <img
          src={avatar}
          alt=""
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.nextElementSibling;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      );
    }
    
    return (
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: colors.surface,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {icon}
      </div>
    );
  };

  return (
    <div style={{
      width: '280px',
      minWidth: '280px',
      maxWidth: '280px',
      height: '100vh',
      backgroundColor: colors.background,
      borderRight: `1px solid ${colors.border}`,
      overflowY: 'auto',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Notifications Section */}
      <div style={{
        borderBottom: `1px solid ${colors.border}`,
        flexShrink: 0
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          height: '56px',
          boxSizing: 'border-box'
        }}>
          <Bell size={16} color={colors.text.secondary} />
          <h3 style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: '600',
            color: colors.text.primary,
            whiteSpace: 'nowrap'
          }}>
            Notifications
          </h3>
        </div>
        
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: notification.isHighlighted 
                  ? colors.highlight.background 
                  : 'transparent',
                borderLeft: notification.isHighlighted 
                  ? `3px solid ${colors.highlight.border}` 
                  : '3px solid transparent',
                transition: 'background-color 0.2s ease',
                minHeight: '52px',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                if (!notification.isHighlighted) {
                  e.currentTarget.style.backgroundColor = colors.surface;
                }
              }}
              onMouseLeave={(e) => {
                if (!notification.isHighlighted) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0
                }}>
                  {notification.icon}
                </div>
                <div style={{
                  flex: 1,
                  minWidth: 0
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '13px',
                    color: colors.text.primary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    lineHeight: '18px'
                  }}>
                    {notification.text}
                  </p>
                  <p style={{
                    margin: '4px 0 0 0',
                    fontSize: '11px',
                    color: colors.text.secondary,
                    lineHeight: '14px'
                  }}>
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div style={{
        borderBottom: `1px solid ${colors.border}`,
        flexShrink: 0
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: '600',
          color: colors.text.primary,
          padding: '16px 16px 12px 16px',
          height: '22px',
          boxSizing: 'border-box'
        }}>
          Activities
        </h3>
        
        <div>
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '56px',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.surface;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ flexShrink: 0 }}>
                {activity.avatar 
                  ? renderAvatar(activity.avatar, null, 32)
                  : (
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: colors.surface,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {activity.icon}
                    </div>
                  )
                }
              </div>
              <div style={{
                flex: 1,
                minWidth: 0
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '13px',
                  color: colors.text.primary,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  lineHeight: '18px'
                }}>
                  {activity.text}
                </p>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '11px',
                  color: colors.text.secondary,
                  lineHeight: '14px'
                }}>
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: '600',
          color: colors.text.primary,
          padding: '16px 16px 12px 16px',
          height: '22px',
          boxSizing: 'border-box'
        }}>
          Contacts
        </h3>
        
        <div>
          {contacts.map((contact, index) => (
            <div
              key={index}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '56px',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.surface;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{
                position: 'relative',
                flexShrink: 0
              }}>
                {renderAvatar(contact.avatar, <User size={16} color={colors.text.secondary} />, 32)}
                {contact.isOnline && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '-1px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: colors.online,
                    border: `2px solid ${colors.background}`,
                    borderRadius: '50%'
                  }} />
                )}
              </div>
              <p style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '500',
                color: colors.text.primary,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '18px'
              }}>
                {contact.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;